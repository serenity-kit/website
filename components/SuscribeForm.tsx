import * as ArrayFormatter from "@effect/schema/ArrayFormatter";
import * as S from "@effect/schema/Schema";
import { Either } from "effect";
import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

type ConvertKitBody = {
  first_name: string;
  email_address: string;
};

const SubscriberEmail = S.Trim.pipe(
  // alternative: S.templateLiteral(S.string, S.literal("@"), S.string)
  S.pattern(/^[^@]+@[^@]+\.[^@]+$/, {
    message: () => "Please provide a valid email address",
  })
);

const Subscriber = S.struct({
  email: SubscriberEmail,
  firstName: S.Trim,
});

type State = { email: string; firstName: string; emailError: string | null } & (
  | { type: "editing" }
  | { type: "sending" }
  | { type: "sending-success" }
  | { type: "sending-error" }
);

type Action =
  | { type: "edit-email"; email: string }
  | { type: "email-error"; error: string }
  | { type: "edit-firstName"; firstName: string }
  | { type: "sending" }
  | { type: "sending-success" }
  | { type: "sending-error" };

const fetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "edit-email": {
      return Either.match(S.parseEither(SubscriberEmail)(action.email), {
        onLeft: (error) => {
          // keep the email error and update the email
          return { ...state, email: action.email };
        },
        onRight: (email) => {
          // reset email error in case the user fixed it
          return { ...state, email, emailError: null };
        },
      });
    }
    case "edit-firstName": {
      return { ...state, firstName: action.firstName };
    }
    case "email-error": {
      return { ...state, emailError: action.error };
    }
    case "sending": {
      return { ...state, type: "sending" };
    }
    case "sending-success": {
      return { ...state, type: "sending-success" };
    }
    case "sending-error": {
      return { ...state, type: "sending-error" };
    }
  }
};

type Props = {
  convertkitFormId: string;
};

const SubscribeForm: React.FC<Props> = (props) => {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    email: "",
    firstName: "",
    emailError: null,
    type: "editing",
  });

  return (
    <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const subscriber = S.parseEither(Subscriber)({
            email: state.email,
            firstName: state.firstName,
          });

          Either.match(subscriber, {
            onLeft: (error) => {
              ArrayFormatter.formatErrors(error.errors).forEach((err) => {
                if (err.path.join(".") === "email") {
                  dispatch({ type: "email-error", error: err.message });
                }
              });
            },
            onRight: (subscriber) => {
              dispatch({ type: "sending" });
              const values: ConvertKitBody = {
                first_name: subscriber.firstName,
                email_address: subscriber.email,
              };
              fetch(
                `https://app.convertkit.com/forms/${props.convertkitFormId}/subscriptions`,
                {
                  method: "post",
                  body: JSON.stringify(values),
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                }
              )
                .then((response) => response.json())
                .then(
                  (response) => {
                    if (response.status === "success") {
                      dispatch({ type: "sending-success" });
                    } else {
                      dispatch({ type: "sending-error" });
                    }
                  },
                  (_error) => dispatch({ type: "sending-error" })
                );
            },
          });
        }}
      >
        <Input
          value={state.firstName}
          onChange={(event) => {
            dispatch({ type: "edit-firstName", firstName: event.target.value });
          }}
          className="flex mb-4 min-w-64"
          placeholder="First name"
          disabled={
            state.type === "sending" || state.type === "sending-success"
          }
        />
        <Input
          value={state.email}
          onChange={(event) => {
            dispatch({ type: "edit-email", email: event.target.value });
          }}
          className="flex min-w-64 mb-4"
          placeholder="Email"
          disabled={
            state.type === "sending" || state.type === "sending-success"
          }
        />
        <Button
          className="mt-8 mb-4"
          type="submit"
          variant="primary"
          disabled={
            state.type === "sending" || state.type === "sending-success"
          }
        >
          Sign up
        </Button>
      </form>
      {state.emailError && (
        <p className="bg-error-100 border-error-200 py-4 px-6 border rounded text-error-500 text-xs">
          {state.emailError}
        </p>
      )}
      {state.type === "sending-success" && (
        <div className="bg-primary-100 border-primary-200 text-primary-900 text-xs py-4 px-6 border rounded">
          Great, we sent you an email with the confirmation link. Please check
          your inbox!
        </div>
      )}
      {state.type === "sending-error" && (
        <p className="bg-error-100 border-error-200 py-4 px-6 border rounded text-error-500 text-xs">
          Sorry, something went wrong. Please try again or contact
          hi@serenity.re
        </p>
      )}
    </div>
  );
};

export default SubscribeForm;
