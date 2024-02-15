import Input from "./Input"

export default function Form() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input label="Name" placeholder="e.g. Jane Doe" required />
      <Input label="Email Address" placeholder="e.g. janedoe@gmail.com" required />
      <Input label="Phone Number" required />
    </form>
  )
}
