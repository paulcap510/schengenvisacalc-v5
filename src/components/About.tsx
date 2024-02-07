import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-container-heading">About</div>
      <div className="about-container-subheading">Beta Note</div>
      <p>
        This app is in beta mode and is currently being developed. Please check
        back regularly for updates!
      </p>
      <div className="about-container-subheading-red">Usage Statement</div>
      <p>
        This app is for informational purposes only. Please be sure to check
        with your government and the countries you are visiting to confirm the
        rules concerning Schengen Zone visits. By using this app, you take full
        responsibility for your stays and efforts to ensure you are abiding by
        the legal requirements for staying in the Schengen Area.
      </p>
      <div className="about-container-subheading">About</div>
      <p>
        Nationals from many countries are allowed to stay a certain number of
        days in the Schgen Zone within a certain period. For Americans and many
        others, this is calculated on a rolling basis, which means that your
        stays are backdated 180 days. This can be confusing, and for those
        planning to spend long periods of time in the Schengen Zone, it could be
        frustrating to plan accordingly. This app will allow to calculate the
        number of days you spend in the Schengen Zone within a 180-day period to
        avoid overstaying or making other mistakes related to your stay.
      </p>
      <div className="about-container-subheading">How To Use</div>
      <p>
        {' '}
        To use this app, simply input the dates of your trips within the
        Schengen Zone. The app will automatically calculate the total number of
        days that you have been in Schengen Zone countries at the bottom. The
        app will NOT allow you to input dates more than 180 days in the past. If
        you would like to input future dates, click the check box below the
        entry and exit date fields. It will automatically allow you to input
        future dates.
      </p>
      <div className="about-container-subheading">Attributions</div>
      <p>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://icons8.com/icon/63253/clock"
        >
          Clock
        </a>{' '}
        icon by{' '}
        <a target="_blank" rel="noreferrer noopener" href="https://icons8.com">
          Icons8
        </a>
      </p>
    </div>
  );
};

export default About;
