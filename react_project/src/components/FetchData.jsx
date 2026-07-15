export default function FetchData() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {

      });
  }, [])

  return (
    <div>FetchData</div>
  )
}
