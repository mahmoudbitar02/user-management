import { useUserContext } from "../../hooks/UserContext";
import maleImage from "../../assets/images/male.png";
import femaleImage from "../../assets/images/female.png";
import "./Users.scss";

function Users() {
  const { users, userDispatch } = useUserContext();

  function deleteUser(e: React.MouseEvent<HTMLButtonElement>, id: string) {
    e.stopPropagation();
    userDispatch({ type: "DELETE_USER", payload: id });
  }

  return (
    <div className="users">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <button
            onClick={(e) => {
              deleteUser(e, user.id);
            }}
            className="user-card__button"
            title="delete"
          >
            X
          </button>

          <div className="user-card__header">
            <img
              src={user.gender === "Männlich" ? maleImage : user.gender === "Weiblich" ? femaleImage : maleImage}
              alt={user.name}
              className="user-card__avatar"
            />

            <div>
              <h2 className="user-card__name">{user.name}</h2>
              <span className="user-card__gender">{user.gender}</span>
            </div>
          </div>

          <div className="user-card__content">
            <div className="user-card__row">
              <strong>🎂 Geburtsdatum</strong>
              <span>{user.dob || "-"}</span>
            </div>

            <div className="user-card__row">
              <strong>📧 E-Mail</strong>
              <span>{user.email || "-"}</span>
            </div>

            <div className="user-card__row">
              <strong>📍 Adresse</strong>
              <span>{user.address || "-"}</span>
            </div>

            <div className="user-card__row">
              <strong>📞 Telefon</strong>
              <span>{user.phone || "-"}</span>
            </div>

            <div className="user-card__row">
              <strong>🌐 Website</strong>
              <span>{user.web || "-"}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
