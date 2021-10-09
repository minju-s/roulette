import { createStore } from 'vuex'
import game from '../game';

export default createStore({
  state: {
    bets: [],
    winningBets: [],
    result: 0,
    balance: 100,
  },
  mutations: {
    addBet (state, type) {
      state.bets.push(type);
    },
    removeBet (state, type) {
      state.bets = state.bets.filter(x => x != type);
    },
    resetBets (state) {
      state.bets = [];
    },
    addWinningBet (state, bet) {
      state.winningBets.push(bet);
    },
    resetWinningBets (state) {
      state.winningBets = [];
    },
    setResult (state, result) {
      state.result = result;
    },
    setBalance (state, balance) {
      state.balance = balance;
    }
  },
  actions: {
    addBet ({commit, state}, type) {
      if (state.balance > 0) {
        commit('addBet', type)
        commit('setBalance', state.balance - 1);
      }
    },
    removeBet ({commit, state}, type) {
      commit('removeBet', type)
      commit('setBalance', state.balance + 1);
    },
    spin ({commit, state}) {
      const result = Math.floor((Math.random() * 37));
      for (const betType of state.bets) {
        const winningAmount = game.getWinningAmount(result, betType);
        if (winningAmount > 0) {
          commit('addWinningBet', {type:betType, winningAmount});
        }
      }
      commit('resetBets');
      commit('setResult', result);
    },
    collect ({commit, state}) {
      let balance = state.balance;
      balance += state.bets.length;
      balance += state.winningBets.length;
      for (const bet of state.winningBets) {
        balance += bet.winningAmount;
      }
      commit('setBalance', balance);
      commit('resetBets');
      commit('resetWinningBets');
    },
    betAll ({dispatch}) {
      dispatch('collect');
      for (let i = 0; i <= 36; i++) {
        dispatch('addBet', i);
      }
      const otherTypes = [
        'red', 'black', 'odd', 'even', '1-18', '19-36',
        'row-1', 'row-2', 'row-3', 'col-1', 'col-2', 'col-3', 
      ]
      for (const type of otherTypes) {
        dispatch('addBet', type);
      }
    }
  }
})
