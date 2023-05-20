import Script from "next/script";
import parse from "html-react-parser";

const GoogleDialogFlow = () => {
  const html = `<style>df-messenger {
    --df-messenger-button-titlebar-color: #551ED6;
    --df-messenger-send-icon: #878FAC;
    --df-messenger-user-message: #75F767;
  }
  </style>
  <df-messenger
    intent="WELCOME"
    chat-title="楽天レシピからおすすめ献立提案Bot"
    agent-id="9e6678ad-61e8-4b4b-82a7-1d6035f9e292"
    language-code="ja"
    chat-icon="/assets/RakutenRecipe.png"
   ></df-messenger>`;
  return (
    <>
      <Script
        src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
        strategy="lazyOnload"
      />
      {parse(html)}
    </>
  );
};

export default GoogleDialogFlow;
