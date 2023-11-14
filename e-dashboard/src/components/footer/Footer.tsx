import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
        {/* first-child of span */}
        <div className="logo">
            <img src="./public/logo.svg" alt="" />
            <span>aum-admin</span>
        </div>
        {/* last-child of span */}
        <span>💋 Aum Dev Dashboard</span>
    </div>
  )
}

export default Footer
