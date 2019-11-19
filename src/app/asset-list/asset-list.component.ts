import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assetdef } from '../shared/assetdef';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype';
import { AssetService } from '../shared/asset.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  assetdef: Observable<Assetdef[]>;
  assetype: Observable<Assettype[]>;
  
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private service: AssetService) { }

  ngOnInit() {
    this.list();
    

  }
  list() {
    this.assetdef = this.service.getAssetList()
  }
  deleteAsset(ad_id:number)
  {
  
    this.service.deleteAsset(ad_id).subscribe(data=>{
    console.log(data);
    this.toastr.error(' Oh No:(','Deleted successfully');
    })
  
  }
}
