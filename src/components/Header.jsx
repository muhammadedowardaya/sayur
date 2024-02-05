import { useSelector } from 'react-redux';
import styles from '../styles/Header.module.scss';

export default function Header() {
	const header = useSelector((state) => state.content.data.header);

	return (
		<header className={styles.Header}>
			<h1>{header.title}</h1>
			<p>{header.sub_judul}</p>
			<div id="banner" className={styles.banner}>
				<img src={header.image} alt="" />
			</div>
		</header>
	);
}
