import styles from "./PromoTicker.module.css";

interface PromoTickerProps {
  items: string[];
  tone?: "light" | "dark";
  compact?: boolean;
}

const PromoTicker = ({
  items,
  tone = "light",
  compact = false,
}: PromoTickerProps) => {
  const repeatedItems = [...items, ...items];

  return (
    <section
      className={[
        styles.ticker,
        tone === "dark" ? styles.dark : styles.light,
        compact ? styles.compact : "",
      ].join(" ")}
      aria-label="Thông báo khuyến mãi"
    >
      <div className={styles.track}>
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PromoTicker;
