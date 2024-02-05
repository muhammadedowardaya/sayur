import { FaWhatsapp } from 'react-icons/fa';

import '../styles/Contact.scss';
import { useSelector } from 'react-redux';
import React from 'react';

export default function Contact() {
	const contact = useSelector((state) => state.content.data.contact);
	const [textMessage, setTextMessage] = React.useState('');

	const openWhatsApp = () => {
		const phoneNumber = contact.whatsapp; // Ganti dengan nomor WhatsApp Anda
		const message = encodeURIComponent(textMessage); // Ganti dengan pesan Anda

		// Buat URL Scheme untuk membuka WhatsApp
		const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		// Buka tautan di jendela baru
		window.open(whatsappUrl, '_blank');
	};

	const onTextMessageChangeHandler = (e) => {
		setTextMessage(e.target.value);
	};

	return (
		<div id="contact">
			<h2>Contact</h2>
			<div className="contact-item">
				<img src={`/foto-contact/${contact.image}`} alt="My photos contact" />
				<p className="name">{contact.name}</p>
				<textarea
					name="message"
					id="message"    
					cols="30"
					rows="10"
					onChange={onTextMessageChangeHandler}
                    placeholder='Ketik pesan anda disini...'
				></textarea>
				<p className="whatsapp" onClick={openWhatsApp}>
					<FaWhatsapp className="whatsapp-icon" /> Send Message
				</p>
			</div>
		</div>
	);
}
