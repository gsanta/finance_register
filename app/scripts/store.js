//FinanceRegister.ApplicationAdapter = DS.FixtureAdapter;

FinanceRegister.ApplicationSerializer = DS.LSSerializer.extend();
FinanceRegister.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'FinanceRegister'
});