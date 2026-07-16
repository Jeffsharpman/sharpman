import { useState } from "react";

export function useNetlifyForm(formName) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function reset() {
    setSubmitted(false);
    setError(null);
  }

  return { submitted, loading, error, handleSubmit, reset, formName };
}
