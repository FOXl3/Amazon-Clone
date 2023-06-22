﻿using Infrastructure.Interfaces;
using Infrastructure.Models;
using Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductImageController : ControllerBase
    {
        private readonly IProductImageService _productImageService;

        public ProductImageController(IProductImageService productImageService)
        {
            _productImageService = productImageService;
        }

        [HttpPost("GetImageById")]
        public async Task<IActionResult> GetImageByIdAsync(FindByIdVM model)
        {
            //[FromBody] GetProductsVM model
            var res = await _productImageService.GetMainImageByIdAsync(model.Id);
            var base64 = _productImageService.GetBase64ByName(res.Name);
            if (base64 != null)
            {
                return Ok(base64);
            }

            return BadRequest();
        }

    }
}
