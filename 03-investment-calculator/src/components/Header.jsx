import calcLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={calcLogo} alt="calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
