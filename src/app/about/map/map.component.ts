import { Component,  OnInit } from '@angular/core';
// import { Input, ViewChild, NgZone} from '@angular/core';
// import { MapsAPILoader, AgmMap } from '@agm/core';
// import { GoogleMapsAPIWrapper } from '@agm/core/services';
// import { } from '@types/googlemaps';

@Component({
  selector: 'pm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;

  ngOnInit() {
    // var mapProp = {
    //   center: new google.maps.LatLng(77.643583, 12.962849),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
