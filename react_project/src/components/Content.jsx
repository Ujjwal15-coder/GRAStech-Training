export default function Content({age, passArray}) {
  function getSimpleArray() {
    return ["Apple", "Banana", "Cherry"];
  }

  return (
    <div>
      <p>Age Prop: {age}</p>
      <p className='text-red'>App Array Item Prop: <span style={{ color: 'black' }}>{passArray ? passArray()[2]?.name : ''}</span></p>
      
      <h4>Simple Array (from internal function):</h4>
      <ul>
        {getSimpleArray().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

