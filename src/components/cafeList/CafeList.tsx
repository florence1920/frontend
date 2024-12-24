import CafeItem from "../cafeListItem/CafeListItem";
import styles from "./CafeList.module.scss";

const CafeList = ({
  cafeInfo,
}: {
  cafeInfo: { name: string; address: string; profileImg: string }[];
}) => (
  <ul className={styles.cafeList}>
    {cafeInfo.map((cafe) => (
      <CafeItem
        key={cafe.name}
        name={cafe.name}
        address={cafe.address}
        profileImg={cafe.profileImg}
      />
    ))}
  </ul>
);

export default CafeList;
