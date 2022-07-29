import React from "react";
import { Link } from "react-router-dom";

export const TermsAndConditions = () => {
  return (
    <div>
      <div className="policy-head u-h3">Terms and Conditions</div>
      <h4 className="policy-subhead u-h4"> Payment Model:</h4>
      <p className="policy-text  u-h4">
        Ride Now, Pay Later: RockRock have teamed up to offer you financing on
        your next order!
      </p>
      <h4 className="policy-subhead u-h4">QUICK AND EASY</h4>
      <p className="policy-text  u-h4">
        Select Affirm at checkout and enter a few pieces of information for a
        real-time decision. Checking your eligibility won’t affect your credit
        score.
      </p>
      <div className="policy-subhead u-h4">FLEXIBLE MONTHLY PAYMENTS</div>
      <p className="policy-text  u-h4">
        Pay your monthly bill using a bank transfer, check or debit card at 
        <Link to="https://www.affirm.com/">Affirm.com.</Link> Choose to Pay over
        3, 6 or 12 months with 0%-30% APR*.
      </p>
      <div className="policy-subhead u-h4">NO HIDDEN FEES</div>
      <p className="policy-text  u-h4">
        There are no gimmicks like deferred interest or hidden fees, so the
        total you see at checkout is always what you actually pay.
      </p>

      <div className="policy-subhead u-h5">
        JUST SELECT PAY WITH AFFIRM AT CHECKOUT – SHOP NOW
      </div>
      <ul>
        <li>
          *10-30% Offer Subject to credit check and approval. Online only, offer
          not available in offline store. Rates vary 10%-30% Based on credit
          rating. Down payment may be required. For purchases under $200,
          limited payment options are available. Estimated payment amount
          excludes taxes and shipping fees.
        </li>
      </ul>
      <h4 className="policy-subhead u-h4">FAQ:</h4>

      <div className="policy-subhead u-h5">
        DO YOU HAVE PADDLE ASSEMBLY INSTRUCTIONS? WHY WAS THE HANDLE SEPARATED
        FROM MY PADDLE?
      </div>
      <p className="policy-text  u-h4">
        Paddle handles come separate from the shaft of the one-piece paddles to
        allow easy paddle sizing. You can download Paddle Assembly Instructions
        by clicking here.
      </p>
      <div className="policy-subhead u-h5">
        THE PRESSURE GAUGE ON MY INFLATABLE PADDLE BOARD PUMP DOESN'T SHOW THAT
        THERE IS ANY PRESSURE. WHY NOT?
      </div>
      <p className="policy-text  u-h4">
        More than likely there is not enough air in the board. Pump up the
        inflatable paddle board until the board takes complete shape. Once the
        board has taken complete shape, continue to pump until you begin to
        receive a significant amount of resistance from the pump as you are
        pushing down. At this point the pressure gauge will begin to show the
        actual pressure in the board (approximately 7 PSI).
      </p>

      <div className="policy-subhead u-h5">WILL MY PADDLE FLOAT?</div>
      <p className="policy-text  u-h4">
        All full carbon fibre paddles will float if properly assembled. The
        three piece aluminium adjustable paddles that come with our inflatable
        boards will not. For the aluminium adjustable paddles, it is advised to
        attach a paddle leash or flotation device to the paddle to prevent the
        paddle from sinking.
      </p>

      <div className="policy-subhead u-h5">
        DOES MY BOARD COME WITH FINS? WHERE ARE THE SIDE BITE FINS FOR MY
        OWNER'S BOX?
      </div>
      <p className="policy-text  u-h4">
        All RockRock boards come with the 10 in. main fin. Otherwise, side bite
        fins are sold separately and can be purchased directly from online store
        as an accessory.
        <br />
        The Rover comes with two sets of fins, 10 in. deep water fins and side
        bite fins for shallower water.
      </p>

      <div className="policy-subhead u-h5">
        WHY ARE THERE BUBBLES ON THE DECK PAD OF MY BOARD?
      </div>
      <p className="policy-text  u-h4">
        On occasion, upon the first couple of uses of the board, you may
        experience some unsightly bubbling in the deck pad. This is a normal
        occurrence and you should not be alarmed.
        <br />
        Deck pads are adhered to the board in a climate controlled facility as
        the last step of our production process. Shortly after, the boards are
        moved to a facility of higher climate for a quality control inspection.
        During this inspection air bubbles underneath the pad that present
        themselves are taken care of by poking a hole with a fine needle to
        release the air. The adhesive on the underside of the pad is still
        extremely tacky and the pad will re-adhere to the board. In some cases
        these air bubbles do not present themselves during the inspection
        process.
        <br />
        If air bubbles show up underneath the deck pad, you can remedy the issue
        by poking a small hole in the deck pad with a needle to release the
        trapped air. Often times, the bubbles will disappear on their own after
        a couple of uses of the board.
      </p>
      <div className="policy-subhead u-h5">
        WHAT'S INCLUDED WITH THE INFLATABLE STAND UP PADDLEBOARD?
      </div>
      <p className="policy-text  u-h4">
        All RockRock inflatable paddle boards come with a 3 piece aluminium
        adjustable paddle, pump, fin, and repair kit. Each board bag is designed
        to hold its included accessories and the rolled-up board.
      </p>
      <div className="policy-subhead u-h5">
        IF A PRODUCT ISN'T LISTED ON THE WEBSITE, IS IT STILL AVAILABLE?
      </div>
      <p className="policy-text  u-h4">
        We list in-stock products on our website. Because production cycles
        vary, we are typically unable to provide visibility into when a
        particular board style will be available. You can also check local
        RockRock dealers for stock of board styles. Our Difference products,
        attachments and lifestyle products are restocked as quickly as possible
        and if currently unavailable, will likely be available soon.
      </p>
    </div>
  );
};
