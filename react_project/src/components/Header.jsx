// import React from 'react'

// export default function Header({ name,title }) {
//   return (
//     <header>
//       <h1>{title || 'Header'}</h1>
//     </header>
//   )
// }

export default function Header({name}) {
  return (
    <nav>
      <h1 style={{ color: 'black' }}>{name}</h1>
    </nav>
  )
  
}



