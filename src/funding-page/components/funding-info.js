export default function FundingInfo() {
  return (
    <div className="content-wrapper">
      <text className="category">FUNDING</text>
      <h2 className="title">
        EXIT Fire'n'Go-The Ultimate Portable Pellet Grill
      </h2>
      <p className="description">
        35% Smaller size | 56% Larger grill space | Battery powered | Smart temp
        control | 8 cooking styles
      </p>
      <ProgressBarSectionTop />
      <progress value={0.7} />
      <ProgressBarSectionBottom />
      <button className="btn-contribution">Make a contribution</button>
    </div>
  );
}

function ProgressBarSectionTop() {
  return (
    <div className="progress-bar-section">
      <div>
        <a className="amount">$304,871</a> MXN
      </div>
      <a>
        <b>54</b> backers
      </a>
    </div>
  );
}

function ProgressBarSectionBottom() {
  return (
    <div className="progress-bar-section">
      <a>365% of $83,517</a>
      <a>
        <b>30</b> days left
      </a>
    </div>
  );
}
