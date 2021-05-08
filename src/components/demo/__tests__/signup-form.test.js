import { SignUpForm } from '../signup-form'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe(SignUpForm.name, () => {
  test('should display required error when submit without fill the name field', async () => {
    const onSubmit = jest.fn()
    render(<SignUpForm onSubmit={onSubmit} />)

    const submitButton = screen.getByText('Sign Up')
    userEvent.click(submitButton)

    await waitFor(() =>
      expect(
        screen.getByText(
          'You need to type your name or how you like to be called'
        )
      ).toBeInTheDocument()
    )
  })

  test('should display invalid error when submit with name field filled with spaces', async () => {
    const onSubmit = jest.fn()
    render(<SignUpForm onSubmit={onSubmit} />)

    const nameInput = screen.getByLabelText('How you like to be called?')
    await userEvent.type(nameInput, '    ')

    const submitButton = screen.getByText('Sign Up')
    userEvent.click(submitButton)

    await waitFor(() =>
      expect(
        screen.getByText(
          'You need to type your name or how you like to be called'
        )
      ).toBeInTheDocument()
    )
  })

  test('should display required error when submit without fill the email field', async () => {
    const onSubmit = jest.fn()
    render(<SignUpForm onSubmit={onSubmit} />)

    const submitButton = screen.getByText('Sign Up')
    userEvent.click(submitButton)

    await waitFor(() =>
      expect(
        screen.getByText('You need to type a valid e-mail that you have access')
      ).toBeInTheDocument()
    )
  })

  test('should display required error when submit without fill the password field', async () => {
    const onSubmit = jest.fn()
    render(<SignUpForm onSubmit={onSubmit} />)

    const submitButton = screen.getByText('Sign Up')
    userEvent.click(submitButton)

    await waitFor(() =>
      expect(
        screen.getByText('Your password is too short (min 8)')
      ).toBeInTheDocument()
    )
  })

  test('should display validation error when the email is invalid', async () => {
    const onSubmit = jest.fn()
    render(<SignUpForm onSubmit={onSubmit} />)

    const emailInput = screen.getByLabelText('Your e-mail')
    await userEvent.type(emailInput, 'invalid_email')

    const submitButton = screen.getByText('Sign Up')
    userEvent.click(submitButton)

    await waitFor(() =>
      expect(screen.getByText('You typed a invalid email')).toBeInTheDocument()
    )
  })

  test('should display validation error when password confirmation does not match the password field', async () => {
    const onSubmit = jest.fn()
    render(<SignUpForm onSubmit={onSubmit} />)

    const passwordInput = screen.getByLabelText('Your password')
    await userEvent.type(passwordInput, '123456789')

    const passwordConfirmationInput = screen.getByLabelText(
      'Type again your password'
    )
    await userEvent.type(passwordConfirmationInput, '99999999')

    const submitButton = screen.getByText('Sign Up')
    userEvent.click(submitButton)

    await waitFor(() =>
      expect(
        screen.getByText('Your password do not match the password confirmation')
      ).toBeInTheDocument()
    )
  })

  test('should submit the form data when filled correctly', async () => {
    const formData = {
      name: 'User name',
      email: 'user@email.com',
      password: 'user_password'
    }
    const onSubmit = jest.fn()
    render(<SignUpForm onSubmit={onSubmit} />)

    const nameInput = screen.getByLabelText('How you like to be called?')
    await userEvent.type(nameInput, formData.name)

    const emailInput = screen.getByLabelText('Your e-mail')
    await userEvent.type(emailInput, formData.email)

    const passwordInput = screen.getByLabelText('Your password')
    await userEvent.type(passwordInput, formData.password)

    const passwordConfirmationInput = screen.getByLabelText(
      'Type again your password'
    )
    await userEvent.type(passwordConfirmationInput, formData.password)

    const submitButton = screen.getByText('Sign Up')
    userEvent.click(submitButton)

    await waitFor(() => expect(onSubmit).toBeCalledWith(formData))
  })
})
