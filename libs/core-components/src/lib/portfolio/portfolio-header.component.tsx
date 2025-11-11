type PortfolioHeaderProps = {
  media: string;
  whiteBackground?: boolean;
};
export const PortfolioHeader = ({ media, whiteBackground }: PortfolioHeaderProps) => {
  return (
    <div className={`project-details-img`} style={{ backgroundColor: whiteBackground ? '#fff' : 'unset'}}>
      <img src={media} alt="banner" />
    </div>
  );
};
