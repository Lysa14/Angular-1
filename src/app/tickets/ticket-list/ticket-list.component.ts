import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }
  

  ngOnInit() {
    this.ticketService.getTickets().subscribe(tickets => {
      this.ticketList = tickets;
    });
 

  } 
ticketHasBeenSelected(hasBeenSelected: boolean) {
  console.log('event received from child:', hasBeenSelected);
}
ticketHasBeenDelete(HasBeenDelete: Ticket) {
  console.log('event received from child:', HasBeenDelete);
}
deleteTicket(ticket: Ticket) {
  
  this.ticketList = this.ticketList.filter(t => t !== ticket);
   }
  }