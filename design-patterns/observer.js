"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
/**
 * Observer pattern is a behavioral design pattern that lets you define a subscription
 * mechanism to notify multiple objects about any events that happen to the object
 * they’re observing.
 * In this example, we have a news subject that has multiple observers (foxNews, metroTV, and cnn)
 * that are subscribed to the news subject. When the news subject has new news, it notifies
 * all the observers.
 */
const news = new rxjs_1.Subject();
const foxNews = news.subscribe((v) => console.log(v + " from foxNews"));
const metroTV = news.subscribe((v) => console.log(v + " from metroTV"));
const cnn = news.subscribe((v) => console.log(v + " from cnn"));
news.next("Breaking news: Covid-19 vaccine is now available");
news.next("Vladimir Putin is the richest");
news.next("The world is ending");
