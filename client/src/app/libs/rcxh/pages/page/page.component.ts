import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ServerView } from 'src/app/struct/ServerView';
import * as AspNetData from "devextreme-aspnet-data-nojquery";
@Component({
    selector: "rcxh-page",
    templateUrl: "./page.component.html",
    styleUrls: ['./page.component.css']
})
export class PageComponent {
    // constructor(private ){}
    dvoFullName: string;

    selectedDVO;
    constructor(private route: ActivatedRoute, private client: HttpClient, private router: Router) {
        this.router.events.forEach(e => {
            if (e instanceof NavigationEnd) {
                this.dvoFullName = this.route.snapshot.params['dvoFullName'];
                this.refershView();
            }
        });

    }
    dvos: any[] = [];
    async ngOnInit() {
        this.dvoFullName = this.route.snapshot.params['dvoFullName'];
        debugger;

        this.refershView();
    }
    async   refershView() {

        // this.dvos = (await this.client
        //     .get(environment.ip + "/api/Hk/DVO/listDVO")
        //     .toPromise()) as any;
        var view = await this.client.get(environment.ip + "/api/Hk/DVO/getViewByDVO/", { params: { dvo: this.dvoFullName } }).toPromise() as any;

        this.selectView(view);
    }
    selectView(dvo: ServerView) {
        debugger;
        if (dvo) {
            if (dvo.dataSource.type == "odata") {
                dvo.dataSource = AspNetData.createStore({
                    key: dvo.dataSource.key,
                    loadUrl: environment.ip + dvo.dataSource.loadUrl,
                    insertUrl: environment.ip + dvo.dataSource.insertUrl,
                    updateUrl: environment.ip + dvo.dataSource.updateUrl,
                    deleteUrl: environment.ip + dvo.dataSource.deleteUrl
                }) as any;
            }
            this.selectedDVO = null;
            setTimeout(() => {
                this.selectedDVO = dvo;
            }, 200);

        }
    }

}
