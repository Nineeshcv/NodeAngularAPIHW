import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemInfoService } from '../Services/system-info.service';
import { CPUInfo } from '../entity/CPUInfo';
import { MemoryInfo } from '../entity/MemoryInfo';
import { SystemInfo } from '../entity/SystemInfo';

@Component({
  selector: 'app-get-system-info',
  templateUrl: './get-system-info.component.html',
  styleUrls: ['./get-system-info.component.css']
})
export class GetSystemInfoComponent implements OnInit {

  constructor(private router:Router,private route : ActivatedRoute,private sysInfoService : SystemInfoService ) { }

  public cpuInfo :CPUInfo;
  public memInfo : MemoryInfo;
  public systemInfo:SystemInfo;

  ngOnInit(): void {
    this.sysInfoService.getCPUInformation().subscribe(data => {
      this.cpuInfo = data;
/*console.log("PRinting Values :"+this.cpuInfo.brand);
      this.cpuInfo.brand = data.brand;
      this.cpuInfo.manufacturer = data.manufacturer;
      this.cpuInfo.speed = data.speed;
      this.cpuInfo.speedmin = data.speedmin;
      this.cpuInfo.speedmax = data.speedmax;
      this.cpuInfo.governor = data.governor;
      this.cpuInfo.core = data.core;
      this.cpuInfo.physicalCores = data.physicalCores;
      this.cpuInfo.processors = data.processors;
      this.cpuInfo.socket = data.socket;
      this.cpuInfo.vendor = data.vendor;
      this.cpuInfo.family = data.family;
      
      this.cpuInfo.model = data.model;
      this.cpuInfo.stepping = data.stepping;
      this.cpuInfo.voltage = data.voltage; */

    }) 
    
   this.sysInfoService.getMemoryInfo().subscribe((data) =>{
     this.memInfo = data;
/*      this.memInfo.total = data.total;
      this.memInfo.used = data.used;
      this.memInfo.active = data.active;
      this.memInfo.free = data.free;
      this.memInfo.buffcache = data.buffcache;
      this.memInfo.buffers = data.buffers;
      this.memInfo.slab = data.slab;
      this.memInfo.cached = data.cached;
      this.memInfo.available = data.available;
      this.memInfo.swaptotal = data.swaptotal;
      this.memInfo.swapused = data.swapused;
      this.memInfo.swapfree = data.swapfree; */
    }) 


    this.sysInfoService.getSystemInfo().subscribe(data =>{
      this.systemInfo = data;
    })
  }

}
