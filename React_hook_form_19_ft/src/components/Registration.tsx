import { useForm, type SubmitHandler } from "react-hook-form";

interface RegistrationData {
  name: string;
  username: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  highestQualification: string;
  interest: string[];
}

const qualifications = [
  "High School",
  "Diploma",
  "Bachelor's",
  "Master's",
  "PhD",
];

const interests = ["Programming", "Design", "Marketing", "Writing", "Music"];

const Registration = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationData>();

  const password = watch("password");

  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 500, margin: "0 auto" }}
    >
      <h2>Registration Form</h2>

      <div>
        <label>Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Username</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: { value: 4, message: "Min 4 characters" },
          })}
          type="text"
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <label>Phone</label>
        <input
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit phone number",
            },
          })}
          type="tel"
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      <div>
        <label>Address</label>
        <textarea
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <span>{errors.address.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Enter a valid email",
            },
          })}
          type="email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          type="password"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>

      <div>
        <label>Highest Qualification</label>
        <select
          {...register("highestQualification", {
            required: "Select your qualification",
          })}
        >
          <option value="">Select...</option>
          {qualifications.map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
        {errors.highestQualification && (
          <span>{errors.highestQualification.message}</span>
        )}
      </div>

      <div>
        <label>Interests</label>
        {interests.map((interest) => (
          <div key={interest}>
            <label>
              <input
                type="checkbox"
                value={interest}
                {...register("interest", {
                  validate: (value) =>
                    value.length > 0 || "Select at least one interest",
                })}
              />
              {interest}
            </label>
          </div>
        ))}
        {errors.interest && <span>{errors.interest.message as string}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default Registration;
