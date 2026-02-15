
const firstcomponents = ({data, fn}) => {
  return (
    <div>
      <button onClick={() => fn(data + 1)}>Click me</button>
      {data}
    </div>
  )
}

export default firstcomponents
