export const SocialCard = ({avatarPic, name, isVerifiedUser, description}) => {
    return (
        <div className="socialCard">
            <div className="socialCard__heading">
                <img className="socialCard__heading__avatar" src={avatarPic} alt=""/>
                <div>
                    <h2 className="socialCard__heading__title">{name}</h2>
                    <p className="socialCard__heading__isVerified">{isVerifiedUser ? "Verified Buyer" : ""}</p>
                </div>
            </div>
            <div>
                <p>“ {description} ”</p>
            </div>
        </div>
)
}