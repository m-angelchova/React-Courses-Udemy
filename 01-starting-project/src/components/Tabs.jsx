export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
//  const ButtonsContainer = buttonsContainer; //must be with capital letter because it's custom

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
