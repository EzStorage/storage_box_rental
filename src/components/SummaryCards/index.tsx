import { CircularProgress } from "@mui/material";
import { useAppSelector } from "src/app/hooks";
import { getStatusCards } from "src/pages/Homepage/constants";
import { SummaryCard } from "./SummaryCards.styles";
import { Link } from "react-router";

const SummaryCards: React.FC = () => {
    const user = useAppSelector(state => state.auth.user);
    if (!user) return <CircularProgress />;
    const statusCards = getStatusCards(user);

    return (
        <>
            {statusCards.map((info, index) => (
                <SummaryCard key={index} background={info.bgColor} borderColor={info.borderColor}>
                    <div>
                        <div className="title">{info.title}</div>
                        <div className="count">{info.count}</div>
                    </div>
                    <Link to="/" className="view-all">
                        View all
                    </Link>
                </SummaryCard>
            ))}
        </>
    );
};
export default SummaryCards;
