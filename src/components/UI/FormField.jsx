function FormField({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  as = "input",
  rows,
  children,
  className = "",
  inputClassName = "",
  options,
  defaultValue,
  ...props
}) {
  const id = `field-${name}`;

  const baseInputClasses = `w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200 ${inputClassName}`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={`${baseInputClasses} resize-none`}
          {...props}
        />
      ) : as === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          className={`${baseInputClasses} appearance-none`}
          defaultValue={defaultValue || ""}
          {...props}
        >
          {defaultValue === "" && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
          {children}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={baseInputClasses}
          {...props}
        />
      )}
    </div>
  );
}

export default FormField;
