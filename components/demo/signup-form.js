import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('You need to type your name or how you like to be called'),
  email: yup
    .string()
    .email('You typed a invalid email')
    .required('You need to type a valid e-mail that you have access'),
  password: yup
    .string()
    .min(8, 'Your password is too short (min 8)')
    .required('You must type a password'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Your password do not match the password confirmation'
    )
})

export function SignUpForm({ onSubmit }) {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onValid = ({ name, email, password }) =>
    onSubmit({ name, email, password })

  const onInvalid = () => {}

  return (
    <form
      className="flex flex-col justify-start items-start w-full rounded-md border border-gray-200 mt-2 mb-2 p-6"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <h1 className="font-bold text-2xl mb-6 text-gray-900">Welcome</h1>

      <label htmlFor="form-name" className="flex flex-col w-full mb-2">
        <span className="font-bold text-gray-600">
          How you like to be called?
        </span>
        <input
          id="form-name"
          name="name"
          placeholder="Ex: George, Mr W, Mary Jane"
          defaultValue=""
          ref={register}
          className="w-full text-gray-800 pt-2 pb-2 pr-4 pl-4 border-b-2 border-gray-300 focus:border-gray-500"
        />
        <span className="text-red-600">{errors.name?.message}</span>
      </label>

      <label htmlFor="form-email" className="flex flex-col w-full mb-2">
        <span className="font-bold text-gray-600">Your e-mail</span>
        <input
          id="form-email"
          name="email"
          type="email"
          placeholder="Ex: spiderman@marvel.co"
          defaultValue=""
          ref={register}
          className="w-full text-gray-800 pt-2 pb-2 pr-4 pl-4 border-b-2 border-gray-300 focus:border-gray-500"
        />
        <span className="text-red-600">{errors.email?.message}</span>
      </label>

      <label htmlFor="form-password" className="flex flex-col w-full mb-2">
        <span className="font-bold text-gray-600">Your password</span>
        <input
          id="form-password"
          name="password"
          type="password"
          placeholder="Ex: this is a HUGE 123 password"
          defaultValue=""
          ref={register}
          className="w-full text-gray-800 pt-2 pb-2 pr-4 pl-4 border-b-2 border-gray-300 focus:border-gray-500"
        />
        <span className="text-red-600">{errors.password?.message}</span>
      </label>

      <label
        htmlFor="form-password-confirmation"
        className="flex flex-col w-full mb-2"
      >
        <span className="font-bold text-gray-600">
          Type again your password
        </span>
        <input
          id="form-password-confirmation"
          name="passwordConfirmation"
          type="password"
          placeholder="The same that you already typed before"
          defaultValue=""
          ref={register}
          className="w-full text-gray-800 pt-2 pb-2 pr-4 pl-4 border-b-2 border-gray-300 focus:border-gray-500"
        />
        <span className="text-red-600">
          {errors.passwordConfirmation?.message}
        </span>
      </label>

      <div className="flex justify-center items-center mt-6">
        <button
          type="submit"
          className="pt-2 pb-2 pr-6 pl-6 bg-pink-600 text-pink-50 border border-pink-700 shadow-lg font-bold rounded-md"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}
