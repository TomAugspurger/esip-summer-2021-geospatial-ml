# fit the KNeighborsClassifier
clf = sklearn.neighbors.KNeighborsClassifier(random_state=0)
clf.fit(X_train, y_train)
