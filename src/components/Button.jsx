const Button = ({ label }) => {
  return (
    <button className="bg-[var(--primary)] rounded-xl py-2 px-4 text-white cursor-pointer">
      { label }
    </button>
  )
}

export default Button;