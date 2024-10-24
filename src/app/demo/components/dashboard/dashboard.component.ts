import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {WooCOunt} from "../../../modules/WooCOunt";
import {WooCommerceService} from "../../../pages/services/woo-commerce.service";
import {Order} from "../../../services/models/order";
import {TokenService} from "../../../token.service";
import {DashhboardContollerService} from "../../../services/services/dashhboard-contoller.service";

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];
   orders!:any;
    products!: Product[];
Counts:WooCOunt={ countOrder:0,countProduct:0,countCustomer:0,countUser:0};
    chartData: any;
    responsiveOptions: any[] | undefined;
    chartOptions: any;
    productsCoresel: any;
    subscription!: Subscription;
     visible =false;
    totalglobal: any;

    constructor(protected token:TokenService, private productService: ProductService, public layoutService: LayoutService , private WooServcie:WooCommerceService,private das:DashhboardContollerService ) {
        this.subscription = this.layoutService.configUpdate$
        .pipe(debounceTime(25))
        .subscribe((config) => {
            this.initChart();
        });
        this.das.getGlobalTotalOrdersPrice$Response().subscribe({
            next:value=>{
                this.totalglobal=value.body
            }
        })
    }

    ngOnInit() {

        this.WooServcie.lastorder().subscribe({
            next: value => {
                this.orders=value.body;
            },

        })
        this.WooServcie.getCount().subscribe(
            {
                next: value => {
                    this.Counts={ countOrder:value.body.orderCount,countProduct:value.body.productCount,countUser:value.body.userCount,countCustomer:value.body.customerCount}
                },
                error: err => {
                   console.log(err);
                }
            }
        )
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
            datasets: [
                {
                    label: 'Orders',
                    data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Customers',
                    data: [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };
        this.WooServcie.getOrdersPerMonth().subscribe({
            next: value => {
                console.log(value.body);
                this.chartData.datasets[0].data=value.body;
            }
        })
        this.WooServcie.getCustomerPerMonth().subscribe({
            next: value => {
                console.log(value.body);
                this.chartData.datasets[1].data=value.body;
            }
        })

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    showDialog(products) {
        this.visible = true;
        this.showCaresel(products);
    }
    showCaresel(Products){
        this.productsCoresel=Products;
    }

}
