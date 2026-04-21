interface GoogleMapProps {
  lat: number
  lng: number
  title?: string
  className?: string
}

export function GoogleMap({ lat, lng, title = "Ubicacion de la propiedad", className }: GoogleMapProps) {
  // Using Google Maps embed with coordinates
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40°${Math.abs(lat).toFixed(4)}'N%20${Math.abs(lng).toFixed(4)}'W!5e0!3m2!1sen!2sus!4v1234567890`

  return (
    <div className={className}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="rounded-lg"
      />
    </div>
  )
}
