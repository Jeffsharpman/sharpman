import { useState } from "react";

export function useNetlifyForm(formName) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  }

  function reset() {
    setSubmitted(false);
  }

  return { submitted, handleSubmit, reset, formName };
}
