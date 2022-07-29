
import MapView from "./common/MapView";
import "./Maps.css";

export default function Maps(props) {
  // const { data } = useAppSelector(deliveryOrder);
  
  // const mapOrderData =
  // data?.map((item) => {
  //   return {
  //     key: item.orderid,
  //     OrderId: item.orderid,
  //     toLatitude: props.latLng.fromLat,
  //     toLongitude: props.latLng.fromLng,
  //     fromLatitude : 13.020000,
  //     fromLongitude :  80.151000,
  //   };
  // }) || [];
  const mapOrderData = [{
    key:1,
    lat : 37.471746,
    lang: -82.54108
  }]
  
  return <MapView mapData={mapOrderData} />;
}
