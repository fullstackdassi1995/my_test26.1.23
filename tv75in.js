const test_data = {
  title:"Result for : TV screen 75 inch:",
  table: document.getElementById("tv"),
  highColor: "rgb(61, 190, 61)",
  lowColor: "red",
  highRankColor: 4,
  lowRankColor: 1,
  tv: [
    {
      id: 0,
      icon_or_image:
        '<a href="https://img.zap.co.il/pics/6/5/8/2/63312856c.gif" target="_blank"><img src="https://img.zap.co.il/pics/2/4/3/1/44601342c.gif" width="120" height="110""></a>',
      name_of_the_store: "Avi supper",
      address:
        " Alenbi 113 Tel-Aviv </br> <a href='https://www.google.com/maps/dir//%D7%90%D7%9C%D7%A0%D7%91%D7%99+113,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95%E2%80%AD/@32.0627113,34.8434405,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151d4c9d4485350b:0xd074affeb37f0a72!2m2!1d34.7734004!2d32.0627307' target='_blank'><i class='fas fa-route' style='font-size:48px;'></i>   ",
      price: "₪ 3,990",
      link_of_the_store:
        '<a href="https://www.soferavi.co.il/" target="_blank"><img src="https://img.zap.co.il/pics/imgs/nsite/newui/newssite-9100.gif"></a>',
      rating_of_the_place: "2/5",
      int_rank: 2,
      num_price: 3990,
      options: "",
    },
    {
      id: 0,
      icon_or_image:
        '<a href="https://img.zap.co.il/pics/6/5/8/2/63312856c.gif" target="_blank"><img src="https://img.zap.co.il/pics/2/4/3/1/44601342c.gif" width="120" height="110""></a>',
      name_of_the_store: "Shupersal online",
      address:
        "Hayarden 5 Ramat-Gan </br> <a href='https://www.shufersal.co.il/online/he/iframe-container/corporateBranches' target='_blank'><i class='fas fa-route' style='font-size:48px;'></i>   ",
      price: "₪ 3,499 ",
      link_of_the_store:
        '<a href="https://www.shufersal.co.il/online/" target="_blank"><img src="https://img.zap.co.il/pics/imgs/nsite/newui/newssite-6358.gif"></a>',
      int_rank: 4,
      num_price: 3499,
      rating_of_the_place: "4/5",
      options: "",
    },
    {
      id: 0,
      icon_or_image:
        '<a href="https://img.zap.co.il/pics/6/5/8/2/63312856c.gif" target="_blank"><img src="https://img.zap.co.il/pics/2/4/3/1/44601342c.gif" width="120" height="110""></a>',
      name_of_the_store: "buy-buy",
      address:
        "Ramat 118 tel-aviv </br> <a href='https://www.google.com/maps/dir//%D7%90%D7%9C%D7%A0%D7%91%D7%99+113,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95%E2%80%AD/@32.0627113,34.8434405,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151d4c9d4485350b:0xd074affeb37f0a72!2m2!1d34.7734004!2d32.0627307' target='_blank'><i class='fas fa-route' style='font-size:48px;'></i>  ",
      price: "₪ 3,189",
      num_price: 3189,
      link_of_the_store:
        '<a href="https://www.buy-buy.co.il/" target="_blank"><img src="https://img.zap.co.il/pics/imgs/nsite/newui/newssite-889.gif"></a>',
      int_rank: 5,
      rating_of_the_place: "5/5",
      options: "",
    },
    {
      id: 0,
      icon_or_image:
        '<a href="https://img.zap.co.il/pics/6/5/8/2/63312856c.gif" target="_blank"><img src="https://img.zap.co.il/pics/2/4/3/1/44601342c.gif" width="120" height="110""></a>',
      name_of_the_store: "Daily sale",
      address:
        "Hamashor 13 Tveria   </br> <a href='https://www.google.com/maps/dir//%D7%94%D7%9E%D7%A9%D7%95%D7%A8+13,+%D7%98%D7%91%D7%A8%D7%99%D7%94%E2%80%AD/@32.781324,35.5023937,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151c3f162a435a45:0x44eae3bef00ff6ea!2m2!1d35.500205!2d32.781324' target='_blank'><i class='fas fa-route' style='font-size:48px;'></i>",
      price: "₪ 3,299",
      num_price: 3299,
      link_of_the_store:
        '<a href="https://www.dailysale.co.il/" target="_blank"><img src="https://img.zap.co.il/pics/imgs/nsite/newui/newssite-185.gif"></a>',
      int_rank: 1,
      rating_of_the_place: "1/5",
      options: "",
    },
  ],
};

my_sort(test_data.tv);
star(test_data.tv);
run_me(test_data.tv);
change_color(test_data.tv);
lucrative(test_data.tv);
average(test_data.tv);

console.log(test_data.tv);

function run_me(tv) {
  let tb = "";
  let id_row = 0;
  let n = 1;
  tv.forEach((e) => {
    tb += `<tr class="num" id= "row${id_row}">
      <td>${n}</td>
      <td class="img" >${e.icon_or_image}</td>
      <td>${e.name_of_the_store}</td>
      <td>${e.address}</td>
      <td>${e.price}</td>
      <td>${e.link_of_the_store}</td>
      <td id="ra${id_row}">${e.rating_of_the_place} </td>
      <td>${e.options} <button onclick="delete1(${id_row})"  class="btn btn-danger" >DELETE</button> <button onclick="buy1(${id_row})" id="${id_row}" class="btn btn-primary">BUY</button></td>
      </tr>`;
    document.getElementById('title').innerHTML = test_data.title
    e.id = id_row;
    id_row++;
    n++;
  });
  document.getElementById("data").innerHTML = tb;
}

function my_sort(tv) {
  tv.sort((tv_a, tv_b) => {
    if (tv_a.int_rank > tv_b.int_rank) {
      return 1;
    } else if (tv_b.int_rank > tv_a.int_rank) {
      return -1;
    } else if (tv_a.num_price < tv_b.num_price) {
      return 1;
    } else {
      return -1;
    }
  });
  return tv;
}

function lucrative(tv) {
  console.log(tv[tv.length - 1]);
  return tv[tv.length - 1]; // עשיתי מיון לפני בפונקציית מיי-סורט
}

function change_color(tv) {
  tv.forEach((e) => {
    if (e.int_rank >= test_data.highRankColor) {
      test_data.table.rows[e.id + 1].style.background = test_data.highColor;
    }
    if (e.int_rank <= test_data.lowRankColor) {
      test_data.table.rows[e.id + 1].style.background = test_data.lowColor;
    }
  });
}

function average(arr) {
  let total = 0;
  arr.forEach((t) => {
    total += t.num_price;
  });
  let average1 = total / arr.length;
  console.log(average1);
  return average1;
}

function buy1(x) {
  Swal.fire({
    title: "To buy",
    html: `<table  class="table table-bordered" > <tr> <td class="col-sm-3"> Name of the store : </td>
      <td class="col-sm-3">${test_data.tv[x].name_of_the_store}</td> </tr>
      <tr> <td>Price:</td>
      <td class="col-sm-3" >${test_data.tv[x].price}</td> </tr>
      <tr> <td class="col-sm-3">Credit Card number : </td>
      <td class="col-sm-2"><input type="number" id="login" class="swal2-input" placeholder="xxxx - xxxx - xxxx - xxxx:"></td> </tr>
      <tr> <td class="col-sm-3"> Date of expiration</td>
      <td class="col-sm-3">${Math.floor(Math.random() * 10 + 2023)}</td> </tr>`,
    confirmButtonText: "Send",
    customClass: "sweetalert-lg",
  });
}

function delete1(x) {
  document.getElementById(`row${x}`).remove();
}

function star(tv) {
  const chackedOn = '<span class="fa fa-star checked">';
  const chackedOff = '<span class="fa fa-star">';
  tv.forEach((e) => {
    switch (e.int_rank) {
      case 1:
        e.rating_of_the_place +=
          chackedOff + chackedOff + chackedOff + chackedOff + chackedOn;
        break;
      case 2:
        e.rating_of_the_place +=
          chackedOff + chackedOff + chackedOff + chackedOn + chackedOn;
        break;
      case 3:
        e.rating_of_the_place +=
          chackedOff + chackedOff + chackedOn + chackedOn + chackedOn;
        break;
      case 4:
        e.rating_of_the_place +=
          chackedOff + chackedOn + chackedOn + chackedOn + chackedOn;
        break;
      case 5:
        e.rating_of_the_place +=
          chackedOn + chackedOn + chackedOn + chackedOn + chackedOn;
        break;
      case 0:
        e.rating_of_the_place +=
          chackedOff + chackedOff + chackedOff + chackedOff + chackedOff;
        break;
    }
  });
}
