import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
        <p>Copyright © {currentYear} All Rights Reserved.</p>
        <p>Developed by Omar Mahat</p>
    </footer>
  )
}

export default Footer