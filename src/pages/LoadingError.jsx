import { useRouteError } from "react-router-dom"

export default function LoadingError() {
  const error = useRouteError()
  return (
    <>
      <h1>{error.message}</h1>
      <p>{error.status} - {error.statusText}</p>
    </>
  )
}