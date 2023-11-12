type PortfolioHeaderProps = {
  media: string;
};
export const PortfolioHeader = ({ media }: PortfolioHeaderProps) => {
  return (
    <div className="project-details-img">
      <img src={media} alt="banner" />
    </div>
  );
};
