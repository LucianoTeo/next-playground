import { FormEvent, useState } from 'react'

interface FormProps {
  handleSubmit: (search: string) => void
}

function FormComponent({ handleSubmit }: FormProps) {
  const [search, setSearch] = useState('')

  return (
    <form
      data-testid="form"
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        handleSubmit(search)
      }}
    >
      <input
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default FormComponent
