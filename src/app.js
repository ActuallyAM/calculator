const income = document.querySelector('.income');
const sickDays = document.querySelector('.sick-days');
const tubercolosis = document.querySelector('.tubercolosis');
const calculateBtn = document.querySelector('.calculate-btn');
const totalMoney = document.querySelector('.total-money');
const totalSickDays = document.querySelector('.total-sick-days');
const dailyAllowance = document.querySelectorAll('.daily-allowance');
const empCompMoney = document.querySelector('.total-comp-emp');
const incCompMoney = document.querySelector('.total-comp-inc');
const empDaysTotal = document.querySelector('.comp-days-emp-total');
const incDaysTotal = document.querySelector('.comp-days-inc-total');
const calculatedInfo = document.querySelector('.calculated-info');

calculateBtn.addEventListener('click', function (e) {
  e.preventDefault();
  sickDaysInt = parseInt(sickDays.value);
  if (
    tubercolosis.checked === true &&
    sickDaysInt >= 183 &&
    sickDaysInt <= 240
  ) {
    sickDays.value = sickDaysInt;
    sickDays.innerHTML = sickDays;
  } else if (sickDaysInt <= 4) {
    sickDays.value = 4;
  } else if (tubercolosis.checked === false && sickDaysInt <= 183) {
    sickDays.value = sickDaysInt;
  } else if (tubercolosis.checked === false && sickDaysInt >= 183) {
    sickDays.value = 182;
  } else if (tubercolosis.checked === true && sickDaysInt >= 240) {
    sickDays.value = 240;
  }
  const avgIncome = parseInt(income.value);
  const daysSick = parseInt(sickDays.value);
  totalSickDays.innerHTML = daysSick;
  for (let i = 0; i < dailyAllowance.length; i++) {
    const allowance = ((avgIncome / 30) * daysSick * 0.7) / daysSick;
    dailyAllowance[i].innerHTML = allowance.toFixed(2) + ' €';
  }
  const allowance = ((avgIncome / 30) * daysSick * 0.7) / daysSick;
  dailyAllowance.innerHTML = allowance.toFixed(2);
  const dailyAllowanceInt = parseFloat(dailyAllowance.innerHTML);
  if (daysSick <= 8) {
    empDaysTotal.innerHTML = daysSick - 3 + ' days';
    empCompMoney.innerHTML = (
      parseInt(empDaysTotal.innerHTML) * dailyAllowanceInt
    ).toFixed(2);
    incDaysTotal.innerHTML = 0 + ' days';
    incCompMoney.innerHTML = 0;
  } else if (daysSick >= 9) {
    empDaysTotal.innerHTML = 5 + ' days';
    empCompMoney.innerHTML = (5 * dailyAllowanceInt).toFixed(2);
    incDaysTotal.innerHTML =
      daysSick - parseInt(empDaysTotal.innerHTML) - 3 + ' days';
    incCompMoney.innerHTML = (
      parseInt(incDaysTotal.innerHTML) * dailyAllowanceInt
    ).toFixed(2);
  }
  totalMoneyEnd =
    parseFloat(empCompMoney.innerHTML) + parseFloat(incCompMoney.innerHTML);
  totalMoney.innerHTML = totalMoneyEnd.toFixed(2);
});
$(document).ready(function () {
  $('input[type="number"]').on('keyup', function () {
    v = parseInt($(this).val());
    min = parseInt($(this).attr('min'));
    max = parseInt($(this).attr('max'));
    if (v > max) {
      $(this).val(max);
    }
  });
});
