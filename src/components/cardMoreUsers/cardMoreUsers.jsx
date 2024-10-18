import styled from "styled-components";

const CardMoreUsers = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p className="title">Who to follow</p>
        <div className="user__container">
          <div className="user">
            <div className="image" />
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
                <p className="username">@namedlorem</p>
              </div>
              <button className="follow">Follow</button>
            </div>
          </div>
          <div className="user">
            <div className="image" />
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
                <p className="username">@namedlorem</p>
              </div>
              <button className="follow">Follow</button>
            </div>
          </div>
          <div className="user">
            <div className="image" />
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
                <p className="username">@namedlorem</p>
              </div>
              <button className="follow">Follow</button>
            </div>
          </div>
        </div>
        <a className="more" href="#">
          See more
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 350px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title,
  .more {
    padding: 10px 15px;
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
  }

  .user__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }

  .user__container {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: 900;
    font-size: 1.3em;
  }

  .name {
    font-weight: 800;
  }

  .username {
    font-size: 0.9em;
    color: #64696e;
  }

  .image {
    width: 60px;
    height: 60px;
    background: rgb(22, 19, 70);
    background: linear-gradient(
      295deg,
      rgba(22, 19, 70, 1) 41%,
      rgba(89, 177, 237, 1) 100%
    );
    border-radius: 50%;
    margin-right: 15px;
  }

  .follow {
    border: none;
    border-radius: 25px;
    background-color: #0f1113;
    color: white;
    padding: 8px 15px;
    font-weight: 700;
  }

  .more {
    display: block;
    text-decoration: none;
    color: rgb(29, 155, 240);
    font-weight: 800;
  }

  .user:hover {
    background-color: #b3b6b6;
  }

  .more:hover {
    background-color: #b3b6b6;
    border-radius: 0px 0px 15px 15px;
  }

  .follow:hover {
    background-color: #2c3136;
  }
`;

export default CardMoreUsers;
