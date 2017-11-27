import {Component, OnInit, ViewChild} from "@angular/core";
import {TabsService} from "../services/tabs.service";
import {Tab} from "../models/tab";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit{

  public tabs: Tab [];
  private currentTab: Tab;

  constructor (private tabsServise: TabsService) {
  }

  ngOnInit() {
    console.log(123)
    this.tabsServise.get()
      .subscribe(
        res => { this.tabs = res['tabs'];
          this.getContent(0)}
      )
  }


  getContent(index: number){
    this.currentTab = this.tabs[index];
  }

}
