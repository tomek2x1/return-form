const TextArea = ({
  name,
  value,
  labelName,
  handleInput,
  type,
  validation,
}) => {
  return (
    <label
      htmlFor={name}
      className={
        validation
          ? "return-form__label return-form__require"
          : "return-form__label"
      }
    >
      <div className="return-form__name">
        {labelName}: <span className="return-form__star">*</span>
      </div>
      <textarea
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={(e) => {
          handleInput(e);
        }}
        className="require return-form__field"
      />
      {validation ? (
        <p className="return-form__require-info">Wybierz swoje dane</p>
      ) : null}
    </label>
  );
};

export default TextArea;
