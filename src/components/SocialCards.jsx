import {socialCardsData} from "../data/socialCardsData.js";
import {SocialCard} from "./SocialCard.jsx";

export const SocialCards = () => {
    return (
        <div className="socialCards">
            {socialCardsData && socialCardsData.map(
                ({id, avatarPic, name, isVerifiedUser, description}) =>
                    (
                        <SocialCard
                            key={id}
                            avatarPic={avatarPic}
                            name={name}
                            isVerifiedUser={isVerifiedUser}
                            description={description}
                        />
                    )
            )}
        </div>
    )
}