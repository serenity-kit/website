// import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
// import * as Yup from "yup";

// const SubscribeSchema = Yup.object().shape({
//   email_address: Yup.string()
//     .email("Please provide a valid email address")
//     .required("Required"),
//   first_name: Yup.string(),
// });

const fetchReducer = (
  _state: { error: any; response: any; pending: boolean },
  {
    type,
    response,
    error,
  }: {
    type: "fetching" | "success" | "error";
    response?: any;
    error?: any;
  }
) => {
  switch (type) {
    case "fetching": {
      return { error: null, response: null, pending: true };
    }
    case "success": {
      return { error: null, response, pending: false };
    }
    case "error": {
      return { error, response: null, pending: false };
    }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
};

type ConvertKitBody = {
  first_name: string;
  email_address: string;
};

type Props = {
  convertkitFormId: string;
};

const SubscribeForm: React.FC<Props> = (props) => {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    error: null,
    response: null,
    pending: false,
  });
  const { pending, response, error } = state;

  const submit = (values: ConvertKitBody) => {
    dispatch({ type: "fetching" });
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
            dispatch({ type: "success", response });
          } else {
            dispatch({ type: "error", error: response });
          }
        },
        (error) => dispatch({ type: "error", error })
      );
  };

  const errorMessage = error
    ? "Sorry, something went wrong! Please contact hi@serenity.re"
    : null;
  const isSuccess = Boolean(response);

  return null;

  return (
    <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
      {/* <p className="text-base font-medium text-gray-900">
        Sign up to our newsletter to learn about our progress.
      </p> */}
      {isSuccess && !pending && (
        <div className="mt-4 text-green-500">
          Great, we sent you an email with the confirmation link. Please check
          your inbox!
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 text-red-500 italic">{errorMessage}</div>
      )}
    </div>
  );
};

export default SubscribeForm;
