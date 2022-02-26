-- unlock user's chart
INSERT INTO transactions (user_id, description, amount, target_user, unlock_chart) 
VALUES 
(1, 'Unlock other''s chart info', 5, 2, true);

-- unlock user's strategies
INSERT INTO transactions (user_id, description, amount, target_user, unlock_strategies) 
VALUES 
(1, 'Unlock other''s strategies info', 5, 3, true);

-- like users' profiles
INSERT INTO transactions (user_id, description, amount, target_user) 
VALUES
(1, 'Like other''s profile', 1, 2);

-- upvote strategie
INSERT INTO transactions (user_id, description, amount, target_user, target_strategy) 
VALUES 
(1, 'Upvote other''s strat_place_holder strategy', 5, 2, 5);

-- buy coins
INSERT INTO transactions (user_id, is_spending, description, amount) 
VALUES
(1, false, 'Purchased coins', 10);


