﻿using Infrastructure.Interfaces;
using Infrastructure.Models;
using Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("GetAllOrders")]
        public async Task<IActionResult> GetAllOrdersAsync()
        {
            var result = _orderService.GetAllOrdersAsync();
            return Ok(result);
        }

        [HttpPost("AddOrder")]
        public async Task<IActionResult> AddOrderAsync(OrderDTO model)
        {
            var result = await _orderService.AddOrderAsync(model);
            return Ok(result);
        }

        [HttpPost("GetOrdersByUserId")]
        public async Task<IActionResult> GetOrdersByUserIdAsync(FindByIdVM model)
        {
            var result = _orderService.GetOrdersByUserIdAsync(model.Id);
            return Ok(result);
        }

    }
}
